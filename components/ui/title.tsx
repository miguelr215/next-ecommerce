import { cn } from "@/lib/utils"

const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <h1 className={cn("text-2xl md:text-3xl font-semibold text-shop-dark-green", className)}>{children}</h1>
    )
}

export default Title