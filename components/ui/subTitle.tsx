import { cn } from "@/lib/utils"

const SubTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h3 className={cn("text-xl md:text-2xl text-dark-gray-600", className)}>{children}</h3>
    )
}

export default SubTitle