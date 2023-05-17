import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import downloadIcon from '../../../assets/images/download-file.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const SelectedCourse = () => {
    const course = useLoaderData();
    const { img, id, name, price, description } = course;
    // for the pdf download
      const pdfRef = useRef()

      const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL(`${'downloadIcon'}`);
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('downloaded.pdf');
        });
      };

    return (
        <div>

            <div className="course-nav flex items-center justify-around md:w-[450px] my-10 mx-auto bg-orange-400 text-white p-5 rounded-md mt-10">
                <img className='w-[100px] rounded-full' src={img} alt="card-img" />
                <h2 className='text-2xl font-semibold'>{name}</h2>
                <button onClick={downloadPDF}>
                    <img className='w-[50px] h-[50px]' src={downloadIcon} alt="" />
                </button>
            </div>

            <div className="mx-auto rounded-lg md:flex bg-white drop-shadow-lg md:drop-shadow-none md:my-10" ref={pdfRef}>
                <img
                    src={img}
                    className="aspect-video w-full md:max-w-sm lg:max-w-3xl object-cover"
                    alt=""
                />
                <div className="p-4 lg:p-10">
                    <p className="mb-1 text-sm font-semibold text-orange-600 text-primary-500">price: {price}</p>
                    <h3 className="text-xl font-medium text-gray-900">{name}</h3>
                    <p className="mt-1 text-gray-500">{description}</p>
                    <div className="mt-4 flex">
                        <Link to='/courses'
                            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 me-5"
                        >
                            Back To Courses
                        </Link>
                        <button onClick={() => { toast.success('purchase success',) }} className="inline-flex items-center mr-2 gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-orange-600 outline-none  hover:bg-rose-100">Buy This Course</button>

                        <Link to='/premium' className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-black outline-none  hover:bg-yellow-200">Get Premium Access</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SelectedCourse;