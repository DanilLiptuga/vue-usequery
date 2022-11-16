export type mutateOptions = {
    onSuccess?: (data: any)=>void,
    onError?: (error: any) => void,
    onSettled?: () => void
}