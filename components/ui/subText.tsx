import { cn } from "@/lib/utils"

const SubText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <p className={cn("text-xl md:text-2xl text-dark-gray-600", className)}>{children}</p>
    )
}

export default SubText