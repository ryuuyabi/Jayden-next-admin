export function getId(): string {
	const url: string = window.location.href
	const lastSlashIndex = url.lastIndexOf('/');
	const lastPart: string = url.slice(lastSlashIndex + 1);
	return lastPart
}
