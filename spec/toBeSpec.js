describe("Comparador toBe", () => {
    it("deve validar o uso do toBe", () => {
        var objetoUm = { valor: true };
        var objetoDois = { valor: true };

        expect(true).toBe(true);
        expect('teste').toBe('teste');
        expect(objetoUm).not.toBe(objetoDois);
    });
});