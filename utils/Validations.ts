export const Validations = {
    validCURP: (curp: string): boolean => {
        const digitoVerificador = (curp17: string): string => {
            const diccionario = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            let suma = 0;
            let digito = 0;
            for (let i = 0; i < 17; i++) {
                suma = suma + diccionario.indexOf(curp17[i]) * (18 - i);
            }
            digito = 10 - (suma % 10);
            if (digito === 10) return '0';
            return digito.toString();
        };

        const re =
            /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        const validado = re.test(curp);

        if (!validado) return false;

        if (!curp.endsWith(digitoVerificador(curp.toUpperCase()))) return false;

        return true;
    },
    validateGUID: (guid: string): boolean => {
        const regex =
            /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$/;
        return regex.test(guid);
    },

    /*
        Validation signature:

        {
            valtype:"regex",
            valref:"\s.*"
        }
        
        {
            valtype:"func",
            valref:"functionname",
            valparams: ["1","2"]
        }

    */
};
