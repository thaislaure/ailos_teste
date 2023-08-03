
import { TestBed } from '@angular/core/testing';
import { ValidadorCPF } from './cpf-validator';
import { FormControl } from '@angular/forms';

describe('ValidadorCPF', () => {

    let validator: ValidadorCPF;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [ValidadorCPF] });
        validator = TestBed.get(ValidadorCPF);
    });

    it('create an instance', () => {
        validator = new ValidadorCPF();
        expect(validator).toBeTruthy();
    });

    it('CPF válido', () => {
        expect(ValidadorCPF.validate(new FormControl('26459408033'))).toBeNull();
    });

    it('CPF inválido conhecido', () => {
        expect(ValidadorCPF.validate(new FormControl('99999999999'))).toEqual({ cpfInvalid: true });
    });

    it('CPF inválido', () => {
        expect(ValidadorCPF.validate(new FormControl('03520683100'))).toEqual({ cpfInvalid: true });
        expect(ValidadorCPF.validate(new FormControl('78069228967'))).toEqual({ cpfInvalid: true });
    });

});
