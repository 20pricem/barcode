// file = Html5QrcodePro.jsx
import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';


const Html5QrcodePro = (props) => {

    useEffect(() => {
        const Html5QrcodePro = new Html5Qrcode("qr-reader");

        const config = { fps: 10, qrbox: 250 };
        // Select front camera or fail with `OverconstrainedError`.
        // html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
        Html5QrcodePro.start({ facingMode: { exact: "user"} }, config, props.qrCodeSuccessCallback);
        
    });

    return (
        <div id={"qr-reader"} />
    );
};

export default Html5QrcodePro;