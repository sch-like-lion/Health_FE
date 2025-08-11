import Bucket from "@/components/ExercisePage/BucketPage/Bucket.jsx";

export default function BucketPage({ params }) {
  const { type } = params;
  return <Bucket type={type} />;
} 