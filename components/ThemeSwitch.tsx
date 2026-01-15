'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-11 h-6" /> // Placeholder matching switch dimensions
    }

    return (
        <div className="flex items-center gap-2">
            <button
                aria-label="Toggle Dark Mode"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(var(--btn-primary-fill))] focus:ring-offset-2 ${theme === 'dark' ? 'bg-[rgb(var(--btn-primary-fill))]' : 'bg-gray-200'
                    }`}
            >
                <span
                    className={`${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
            </button>
            {theme === 'dark' ? <FiMoon size={16} /> : <FiSun size={16} />}
        </div>
    )
}
