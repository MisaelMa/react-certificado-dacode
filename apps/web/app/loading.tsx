export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>
  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-md shadow-md">
      <div className="animate-pulse space-y-4">
        <div className="rounded-full bg-gray-300 h-16 w-16 mx-auto"></div>
        <div className="h-6 bg-gray-300 w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 w-2/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 w-2/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 w-1/4 mx-auto"></div>
      </div>
    </div>
  </div></>
}