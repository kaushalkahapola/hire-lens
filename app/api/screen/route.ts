// app/api/screen/route.ts

import { NextRequest, NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get('title');
    const skills = formData.get('skills');
    const description = formData.get('description');

    if (!title || !skills || !description ) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    console.log(formData);

    // Assuming your backend is running on http://localhost:8000
    const response = await fetch(`${API_URL}/upload_resume`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request' }, { status: 500 });
  }
}