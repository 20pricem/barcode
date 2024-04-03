import Html5QrcodePlugin from './Html5QrcodePlugin';
import Html5QrcodePro from './Html5QrcodePro';

import { useState } from "react"

function App() {
  
  const [scanResult, setScanResult] = useState(null);

  const onNewScanResult = (decodedText, decodedResult) => {
    setScanResult(decodedText)
    Html5QrcodePro.clear();
  };

  return (
    <div className="App">
      <h1>Barcode Scanner</h1>
      {scanResult ? (
        <div>ISBN: {scanResult}</div>
      ) : (
        <Html5QrcodePro
          qrCodeSuccessCallback={onNewScanResult}
        />
      )}
    </div>
  );
}

export default App;