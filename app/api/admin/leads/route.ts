import { NextResponse } from "next/server";
import { getLeadsFromStore, updateLeadStatus, deleteLeadFromStore } from "@/lib/leadsStore";

export async function GET() {
  try {
    const leads = await getLeadsFromStore();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    console.error("Admin leads fetch error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "Missing id or status" }, { status: 400 });
    }

    const updated = await updateLeadStatus(id, status);
    return NextResponse.json({ success: updated });
  } catch (error) {
    console.error("Admin leads update error:", error);
    return NextResponse.json({ success: false, message: "Failed to update lead" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing lead id" }, { status: 400 });
    }

    const deleted = await deleteLeadFromStore(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    console.error("Admin lead delete error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete lead" }, { status: 500 });
  }
}
