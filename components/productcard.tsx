import Image from "next/image";
import { Card, CardHeader } from "./ui/card";

export default function ShadcnProcuctCard({ data }: { data: TypeProducts }) {
    return (
        <Card className="max-w-md">
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
        </Card>
    );
}