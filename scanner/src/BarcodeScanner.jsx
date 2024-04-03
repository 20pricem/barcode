import React, { useState } from "react";
import { useZxing } from "react-zxing";

function BarcodeScanner() {
  const [result, setResult] = useState("");
  const [showVideoFeed, setShowVideoFeed] = useState(true);

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      setShowVideoFeed(false); // Hide the video feed once a result is decoded
    },
  });

  return (
    <>
      {showVideoFeed && <video ref={ref} style={{ width: '100%', maxWidth: '380px', height: '100%', maxHeight: '250px' }} />}
      {/* Render video feed only if showVideoFeed is true */}
      {!showVideoFeed && (
        <p>
          <span>ISBN:</span>
          <span>{result}</span>
        </p>
      )}
    </>
  );
}

export default BarcodeScanner;