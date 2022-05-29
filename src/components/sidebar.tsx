import { Button } from "@/components/ui/button"

export default function Sidebar() {
    return (
        <div className="bg-white text-gray-800 p-4 h-screen w-64">
            <div className="space-y-4">
                
                <Button variant="ghost" className="w-full justify-start text-lg font-sans">
                    <span className="icon-[material-symbols--file-copy]"></span>
                    File List
                </Button>
                <Button variant="ghost" className="w-full justify-start text-lg font-sans">
                    <span className="icon-[solar--album-bold]"></span>
                    Album
                </Button>
                <Button variant="ghost" className="w-full justify-start text-lg font-sans">
                    <span className="icon-[carbon--categories]"></span>
                    Smart Classification
                </Button>
                <Button variant="ghost" className="w-full justify-start text-lg font-sans">
                    <span className="icon-[fluent--bin-recycle-full-20-filled]"></span>
                    Recycle Bin
                </Button>
                <Button variant="ghost" className="w-full justify-start text-lg font-sans">
                    <span className="icon-[ci--share-ios-export]"></span>
                    My Shares
                </Button>
            </div>
        </div>
    )
}
