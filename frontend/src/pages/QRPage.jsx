import { useI18n } from '../i18n'
import { cafeConfig } from '../config'

export default function QRPage() {
  const {t}=useI18n()
  return <>
    <section className="page-banner no-print">
      <span className="eyebrow">DIGITAL MENU</span>
      <h1>{t('qrTitle')}</h1>
      <p>{t('qrSub')}</p>
      <p>Print this QR code and place it on tables, the counter, or takeaway packaging.</p>
      <button className="button" onClick={()=>window.print()}>Print QR code</button>
    </section>
    <section className="qr-print-layout">
      <div className="qr-print-header">
        <img src={cafeConfig.logo} alt="GELATIAMO" className="qr-print-logo"/>
        <div className="qr-print-brand">
          <h1>GELATIAMO</h1>
          <p>Italian Cremeria & Cafe</p>
        </div>
      </div>
      <div className="qr-print-content">
        <div className="qr-print-main">
          <h2>Scan for Our Digital Menu</h2>
          <div className="qr-code-container">
            <img src="/qr.png" alt="QR Code" style={{width:'280px',height:'280px',display:'block'}}/>
          </div>
          <p className="qr-instruction">Point your camera at the QR code to view our complete menu</p>
        </div>
      </div>
    </section>
  </>
}
