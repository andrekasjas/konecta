import { useState } from 'react';

export const usePopup = () => {
    const [isOpen, setIsopen] = useState(false);

    const openModal = () => {
        setIsopen(true);
    }

    const closeModal = () => {
        setIsopen(false);
    }

    return { isOpen, openModal, closeModal };
}
