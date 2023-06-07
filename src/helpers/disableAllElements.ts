export default function disableAllElements(obj: { current: any }): void {
  const keys = Object.keys(obj.current);

  keys.forEach((key) => {
    //disable the current input
    const currentInputRef =
      obj.current && (obj.current[key] as HTMLInputElement);
    if (currentInputRef) currentInputRef.disabled = true;
  });
}
