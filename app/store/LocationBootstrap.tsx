'use client'

import React from 'react'
import { useAppDispatch, useAppSelector } from './hooks'
import { updateForm } from './slices/stepFormSlice'
import { getUserLocation } from '../../utils/getLocation'
import { notifyTelegramVisit } from '@/utils/sendData'

export default function LocationBootstrap() {
    const dispatch = useAppDispatch()
    const { ip, location, country_code } = useAppSelector((state) => state.stepForm.data)

    React.useEffect(() => {
        if (ip && location && country_code) return

        let isMounted = true

        const loadLocation = async () => {
            const userLocation = await getUserLocation()

            if (!isMounted) return

            const language = userLocation?.country_code?.toLowerCase?.() || "en";
            await notifyTelegramVisit({ location: userLocation, lang: language })

            dispatch(updateForm(userLocation))
        }

        loadLocation()

        return () => {
            isMounted = false
        }
    }, [country_code, dispatch, ip, location])

    return null
}
