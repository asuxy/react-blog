export function slugify(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "") // Remove special characters
        .replace(/\s+/g, "-")        // Replace spaces with hyphens
        .replace(/-+/g, "-");        // Remove duplicate hyphens
}
