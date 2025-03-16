import { NextResponse } from "next/server";
import connectDB from "../../../../../libs/mongodb";
import Post from "../../../../../models/post";


export async function PUT(request, {params}) {
    const { id } = params;
    const {newTitle: title, newDescription: description, newImageUrl: imageUrl } = await request.json();
    await connectDB();
    await Post.findByIdAndUpdate(id, {title,description, imageUrl});
    return NextResponse.json({message: 'Post updated'},{status: 200});
}

export async function GET(request, {params}) {
    const { id } = params;
    await connectDB();
    const post = await Post.findOne({_id: id});
    return NextResponse.json({post}, {status:200});
}