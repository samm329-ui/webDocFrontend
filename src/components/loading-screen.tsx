export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center space-y-8">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
