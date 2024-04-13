import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {

    }catch (error) {
        console.log("[wishlist_POST]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};
