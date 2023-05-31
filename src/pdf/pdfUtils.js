import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const handlePrint = async () => {
    const section = document.querySelector('.prod__sec');
  
    if (!section) {
      console.error("Element with class 'prod__sec' not found.");
      return;
    }
  
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const data = await html2canvas(section, {
      useCORS: true,
      scale: 2, // Adjust the scale as needed
    });
    const img = data.toDataURL('image/png');
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('report.pdf');
  };

  export default handlePrint;