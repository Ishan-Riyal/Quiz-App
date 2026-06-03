import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-toastify";

export const usePDF = (category, reviewData) => {
  const exportPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(20);
      doc.text(`${category} Quiz Report`, 14, 20);

      autoTable(doc, {
        head: [["No.", "Question", "Correct Answer", "Your Choice", "Status"]],
        body: reviewData.map((item) => [
          item.originalNo,
          item.question,
          item.options[item.correctIdx] || "N/A",
          item.isSkipped ? "Skipped" : item.options[item.userSelected],
          item.isCorrect ? "CORRECT" : "WRONG",
        ]),
        startY: 45,
        theme: "grid",
        headStyles: { fillColor: [124, 58, 237] },
      });

      doc.save(`${category}_Result.pdf`);
      toast.success("PDF Saved! 📄");
    } catch (err) {
      toast.error("PDF export failed");
    }
  };

  return { exportPDF };
};
