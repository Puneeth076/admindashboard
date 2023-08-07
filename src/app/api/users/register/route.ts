import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/dbCofig";
import userModel from "@/models/userModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody: any = await request.json();
    const { username, email, password } = reqBody;

    console.log(username, email, password);
    //check for exist's
    const user = await userModel.findOne({ email });
    if (user) {
      return NextResponse.json({
        status: false,
        message: "User already exists",
      });
    }
    const salt: any = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    return NextResponse.json({
      status: true,
      message: "user created successfully",
      data: savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: false,
      message: "Error in register api",
    });
  }
}
