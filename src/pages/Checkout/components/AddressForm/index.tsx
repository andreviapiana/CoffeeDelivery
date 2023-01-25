import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  AddressContainer,
  CardTitle,
  FormContainer,
  FormTitle,
  Input,
  InputsContainer,
} from './styles'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <AddressContainer>
      <CardTitle>
        <p>Complete seu pedido</p>
      </CardTitle>
      <FormContainer>
        <FormTitle>
          <div className="iconWrapper">
            <MapPinLine size={22} />
          </div>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormTitle>
        <InputsContainer>
          <Input
            placeholder="CEP"
            className="cep"
            {...register('cep', { required: true, valueAsNumber: true })}
          />
          <Input
            placeholder="Rua"
            className="street"
            {...register('rua', { required: true })}
          />
          <Input
            placeholder="Número"
            className="number"
            {...register('numero', { required: true, valueAsNumber: true })}
          />
          <Input
            placeholder="Complemento"
            className="complement"
            {...register('complemento')}
          />
          <Input
            placeholder="Bairro"
            className="district"
            {...register('bairro', { required: true })}
          />
          <Input
            placeholder="Cidade"
            className="city"
            {...register('cidade', { required: true })}
          />
          <Input
            list="state"
            placeholder="UF"
            {...register('UF', { required: true })}
          />
          <datalist id="state">
            <option value="AC" />
            <option value="AL" />
            <option value="AP" />
            <option value="AM" />
            <option value="BA" />
            <option value="CE" />
            <option value="DF" />
            <option value="ES" />
            <option value="GO" />
            <option value="MA" />
            <option value="MT" />
            <option value="MS" />
            <option value="MG" />
            <option value="PA" />
            <option value="PB" />
            <option value="PR" />
            <option value="PE" />
            <option value="PI" />
            <option value="RJ" />
            <option value="RN" />
            <option value="RS" />
            <option value="RO" />
            <option value="RR" />
            <option value="SC" />
            <option value="SP" />
            <option value="SE" />
            <option value="TO" />
          </datalist>
        </InputsContainer>
      </FormContainer>
    </AddressContainer>
  )
}
