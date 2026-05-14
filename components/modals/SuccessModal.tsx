'use client'
import React from 'react';
import Modal from './Modal';
import { useAppDispatch } from '../../app/store/hooks';
import { resetForm } from '../../app/store/slices/stepFormSlice';

interface SuccessModalProps {
    isOpend: boolean;
    onToggleSuccess: (value: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpend, onToggleSuccess }) => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState(isOpend);

    React.useEffect(() => {
        setIsOpen(isOpend);
        if (isOpend) {
            // Clear all store when success modal is opened
            dispatch(resetForm());
            localStorage.removeItem('privacy_center_state');
        }
    }, [isOpend, dispatch]);

    const handleClose = () => {
        setIsOpen(false);
        onToggleSuccess(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            title="Request has been sent"
            onClose={handleClose}
        >

            <div className="h-full flex flex-col flex-start w-full items-center justify-between flex-1">
                <div>
                    <div className='rounded-[10px] overflow-hidden mb-[15px] h-[250px]'>
                        <img src="/images/meta/creative.webp" className='object-cover w-full h-full' alt="success" />
                    </div>
                    <p className='text-[#9a979e] mb-[10px] text-[15px] pt-5'>Your information has been added to the processing queue. We will respond to your results within 24 hours. In case we do not receive a response, please resend the information so we can assist you.</p>
                    <p className='text-[#9a979e] mb-[20px] text-[15px]'>From the Customer Care Team</p>
                    <a className='h-[45px] min-h-[45px] w-full bg-[#0064E0] text-white rounded-[40px] pt-[10px] pb-[10px] flex items-center justify-center transition-opacity duration-300' href="https://www.facebook.com">Return to facebook</a>
                </div>

                <div className='w-[60px] mt-[20px] mx-auto pt-8'>
                    <img src="/images/meta/logo-gray.svg" width="100%" height="100%" alt="logo" />
                </div>
            </div>
        </Modal>
    );
};

export default SuccessModal;
