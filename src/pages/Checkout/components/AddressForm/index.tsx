import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../AddressFormInput'
import {
  AddressContainer,
  CardTitle,
  FormContainer,
  FormTitle,
  InputsContainer,
} from './styles'

interface ErrosType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrosType

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
            type="number"
            {...register('cep')}
            error={errors.cep?.message}
          />
          <Input
            placeholder="Rua"
            className="street"
            {...register('rua')}
            error={errors.rua?.message}
          />
          <Input
            placeholder="Número"
            className="number"
            type="number"
            {...register('numero')}
            error={errors.numero?.message}
          />
          <Input
            placeholder="Complemento"
            className="complement"
            rightText="Opcional"
            {...register('complemento')}
            error={errors.complemento?.message}
          />
          <Input
            placeholder="Bairro"
            className="district"
            {...register('bairro')}
            error={errors.bairro?.message}
          />
          <Input
            placeholder="Cidade"
            className="city"
            {...register('cidade')}
            error={errors.cidade?.message}
          />
          <Input
            list="state"
            placeholder="UF"
            {...register('UF')}
            error={errors.UF?.message}
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
