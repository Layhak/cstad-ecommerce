import * as React from 'react'
import { IconSvgProps } from '@/types'

export const MoonFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
            fill="currentColor"
        />
    </svg>
)

export const EyeIcon = ({
    size = 24,
    width,
    height,
    color = 'currentColor',
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill={color}
            d="M12 16q1.875 0 3.188-1.312T16.5 11.5q0-1.875-1.312-3.187T12 7q-1.875 0-3.187 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5q0-1.125.788-1.912T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2m0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488q0-.25.063-.488t.187-.462q1.6-2.95 4.363-4.75T12 4q3.35 0 6.113 1.8t4.362 4.75q.125.225.188.463t.062.487q0 .25-.062.488t-.188.462q-1.6 2.95-4.362 4.75T12 19"
        />
    </svg>
)
export const PencilIcon = ({
    size = 24,
    width,
    height,
    color = 'currentColor',
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill={color}
            d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"
        />
    </svg>
)
export const TrashIcon = ({
    size = 24,
    width,
    height,
    color = 'currentColor',
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill={color}
            d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"
        />
    </svg>
)

export const PlusIcon = ({
    size = 24,
    width,
    height,
    color = 'currentColor',
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill={color}
            d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
        />
    </svg>
)

export const SunFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <g fill="currentColor">
            <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
            <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
        </g>
    </svg>
)

export const NewIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        {...props}
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M18 11h-2q-.425 0-.712-.288T15 10q0-.425.288-.712T16 9h2V7q0-.425.288-.712T19 6q.425 0 .713.288T20 7v2h2q.425 0 .713.288T23 10q0 .425-.288.713T22 11h-2v2q0 .425-.288.713T19 14q-.425 0-.712-.288T18 13zm-9 1q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12m-8 6v-.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18"
        />
    </svg>
)
export const UserIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width}
        height={size || height}
        {...props}
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
        />
    </svg>
)
export const HeartFilledIcon = ({
    size = 24,
    width,
    height,
    ...props
}: IconSvgProps) => (
    <svg
        aria-hidden="true"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
)

export const SearchIcon = (props: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
)

export const LoadingIcon = (props: IconSvgProps) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M12 2a10 10 0 00-2 19.6V22a10 10 0 002 0v-.4A10 10 0 0012 2z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
)
