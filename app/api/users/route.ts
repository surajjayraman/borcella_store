import connectToDB from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import User from "@/lib/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();
    let user = await User.findOne({ clerkId: userId });

    // when the user signs in for the first time, create a new user
    if (!user) {
      user = await User.create({ clerkId: userId });
      await user.save();
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("[users_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
