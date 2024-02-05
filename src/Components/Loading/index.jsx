const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full animate-spin">
                    <img className="h-full w-full rounded-full" src="https://img.icons8.com/fluent/30/000000/cloud-akatsuki.png" />
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
