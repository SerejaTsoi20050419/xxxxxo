"use client";

import { Card } from "antd";
import { format } from "date-fns";
import { truncateText } from "@/utils/truncate";

interface MovieCardProps {
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
}

const { Meta } = Card;

export default function MovieCard({ title, overview, releaseDate, posterPath }: MovieCardProps) {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        />
      }
    >
      <Meta
        title={`${title} (${format(new Date(releaseDate), "yyyy")})`}
        description={truncateText(overview, 100)}
      />
    </Card>
  );
}