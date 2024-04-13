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

    if (!user) {
      user = await User.create({ clerkId: userId });
    }
  } catch (error) {
    console.log("[users_GET]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
