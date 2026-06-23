import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import Image from "next/image";

export function ProcuctCard({ data }: { data: TypeProducts }) {
    return (
        <div>
            <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={300}
                unoptimized
                className="size-12"
            />
            <div>
                <h1>{data.title}</h1>
                <p>{data.price}</p>
            </div>
            <div>
                <p>{data.description}</p>
            </div>
        </div>
    );
}
export default function ShadcnProcuctCard({ data }: { data: TypeProducts }) {
    return (
        <Card className="max-w-md">
            <CardHeader className="h-52 overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.title}

                    width={500}
                    height={300}
                    unoptimized
                    className=" aspect-square object-cover"
                />
            </CardHeader>
            <CardContent>
                <CardTitle>{data.title}</CardTitle>
                <p>{data.price}</p>
            </CardContent>
            <CardFooter>
                <CardDescription>{data.description}</CardDescription>
            </CardFooter>
        </Card>
    );
}