import { cn } from "@/lib/utils"

const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h2 className={cn("text-xl md:text-2xl font-semibold text-shop-dark-green", className)}>{children}</h2>
    )
}

export default SectionTitle