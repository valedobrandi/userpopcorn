
export default function BoxList({ isOpen, children }) {
    return (
        isOpen && (<>
            {children}
        </>)
    );
}

