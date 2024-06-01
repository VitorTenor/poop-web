export const base64FromPath = (path: string): Promise<string> => {
    return new Promise(async (resolve, reject): Promise<void> => {
        const blob: Blob = await blobFromPath(path);
        const reader: FileReader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error: ProgressEvent<FileReader>) => reject(error);
    });
};

export const readFileAsString = (path: string): Promise<string> => {
    return new Promise(async (resolve, reject): Promise<void> => {
        const data : FileReader = new FileReader();
        data.onload = () => resolve(data.result as string);
        data.onerror = (error: ProgressEvent<FileReader>) => reject(error);
        const blob: Blob = await blobFromPath(path);
        data.readAsText(blob);
    });
};

const blobFromPath =  (path: string): Promise<Blob> => {
    return new Promise(async (resolve): Promise<void> => {
        const response: Response = await fetch(path);
        const blob: Blob = await response.blob();
        resolve(blob);
    });
};
