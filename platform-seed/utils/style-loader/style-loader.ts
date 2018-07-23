import * as fs from 'fs';
export class StyleLoader {
    distPath: string;
    fileMatcher = /^\w{2}.\w{3,4}/g;
    constructor(distPath: string) {
        this.distPath = distPath;
    }
    getStyles(): any {
        const files = fs.readdirSync(this.distPath);
        const styles = {};
        files.forEach(file => {
            const matches = this.fileMatcher.exec(file);
            if (matches) {
                styles[matches[0]] = file;
            }
        });
        return styles;
    }
}
