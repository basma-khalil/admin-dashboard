'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useTheme } from '@mui/material';
// Utils
import { palette } from '../../../theme/theme';
// Icons
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
// Types
interface PdfDownloaderProps {
  srcElementId: string;
  pdfFileName: string;
}

export default function PdfDownloader({
  srcElementId,
  pdfFileName,
}: PdfDownloaderProps) {
  const theme = useTheme();
  const color = palette(theme.palette.mode);

  const handleDownloadReport = () => {
    const srcElement = document.getElementById(srcElementId) as HTMLElement;

    html2canvas(srcElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'JPEG', -3, -2.5, pdfWidth, pdfHeight);
      pdf.save(`${pdfFileName}.pdf`);
    });
  };

  return (
    <Box display={'flex'}>
      <Button
        variant="contained"
        startIcon={<DownloadOutlinedIcon />}
        onClick={handleDownloadReport}
        sx={{
          alignSelf: 'flex-end',
          padding: '10px 20px',
          backgroundColor: color.blue[700],
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        download reports
      </Button>
    </Box>
  );
}
