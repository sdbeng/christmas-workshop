import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(request: Request) {
  const { activity, enabled } = await request.json();
  if (typeof activity !== 'string' || typeof enabled !== 'boolean') {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }

  try {
    const updatedActivity = await db.workshop?.upsert({
        where: { activity },
        update: { enabled },
        create: { activity, enabled }
    });

    return NextResponse.json({success: true, data: updatedActivity});
    
  } catch (error) {
    console.error('Error in POST /api/workshop:', error);
    return NextResponse.json({error: 'Failed to update activity'}, {status: 500});
  } finally {
    await db.$disconnect();
  }
}

export async function GET() {
    try {
        const activities = await db.workshop?.findMany();
        return NextResponse.json(activities);
        
    } catch (error) {
        console.error('Error in POST /api/workshop:', error);
        return NextResponse.json({error: 'Failed to fetch activities'}, {status: 500});
        
    }
}

