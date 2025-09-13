import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="border-none bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="duration-30 h-48 w-full object-cover transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300" />
      </div>

      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-bold text-card-foreground transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          {liveUrl && (
            <Button variant="default" size="sm" asChild>
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="size-4" />
                Ver Projeto
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={githubUrl} target="_blank" className="text-black">
                <Image
                  alt="github icon"
                  src="/assets/github.svg"
                  width={16}
                  height={16}
                />
                Código
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
