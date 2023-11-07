import { Heading } from "@/components/heading"
import { Settings } from "lucide-react"

const SettingsPage = () =>{

    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings."
                icon={Settings}
                iconColor="text-gray-700"
                bgColor="bg-gray-700/10"
            />
            <div className="px-4 lg:Px-8 space-y-4">
                <div className="text-muted-foreground text-sm">

                </div>
            </div>
        </div>
    )
}

export default SettingsPage