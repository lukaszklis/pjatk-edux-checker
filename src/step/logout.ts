import * as puppeteer from "puppeteer";

export async function logout(page: puppeteer.Page): Promise<void> {
    await page.waitForSelector("#menuBar");
    await page.click('#menuBar a[href="logout.aspx"]');
    await page.waitForSelector("#contLogout");
}
