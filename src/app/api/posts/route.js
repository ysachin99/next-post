import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import Post from "../../../../models/post";

export async function POST(request) {
    const {title, description,imageUrl} = await request.json();
    await connectDB();
    await Post.create({title,description,imageUrl});
    return NextResponse.json({message: 'post created'}, {status: 201});
}

export async function GET() {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json({posts});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({message: "Post deleted"}, {status: 200});   
}