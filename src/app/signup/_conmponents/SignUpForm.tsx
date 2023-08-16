'use client'
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@/lib/mui/muiRendering'
import { User } from 'firebase/auth'
import {
  Controller,
  Control,
  FieldValues,
  UseFormHandleSubmit,
  SubmitHandler,
} from 'react-hook-form'
import { SignUpFormData } from '../types/formData'
import { ChangeEvent, FormEventHandler, ReactNode } from 'react'
import { Db_Locates } from '@/api/@types'
import { Typography } from '@mui/joy'

type Props = {
  control: Control<SignUpFormData, any>
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleSetIcon: (file: Blob | null) => void
  preview: string | null
  locates: Db_Locates[]
  user: User | null
}

export const SignUpForm = (props: Props) => {
  const { control, handleSubmit, handleSetIcon, preview, locates } = props

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography>アイコン選択</Typography>
        <Controller
          name="icon"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputLabel>
              <TextField
                {...field}
                type="file"
                onChange={(e: any) => {
                  handleSetIcon(e.currentTarget.files![0])
                }}
                sx={{ display: 'none' }}
              />
              <Avatar src={preview!} />
            </InputLabel>
          )}
        />
        <Typography>名前</Typography>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="名前を入力してください"
              error={errors.username ? true : false}
              helperText={errors.username?.message as string}
            />
          )}
        />
        <Typography>Email</Typography>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="名前を入力してください"
              error={errors.email ? true : false}
              helperText={errors.email?.message as string}
            />
          )}
        />
        <Typography>パスワード</Typography>

        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="名前を入力してください"
              error={errors.password ? true : false}
              helperText={errors.password?.message as string}
              type="password"
            />
          )}
        />
        <Typography>居住地</Typography>

        <Controller
          name="locate_id"
          control={control}
          rules={{
            required: { value: true, message: '必須入力' },
          }}
          render={({ field, formState: { errors } }) => (
            <Controller
              name="locate_id"
              control={control}
              defaultValue={0}
              render={({ field, formState: { errors } }) => (
                <FormControl fullWidth error={errors.locate_id ? true : false}>
                  <Controller
                    name="locate_id"
                    control={control}
                    render={({
                      field: { onChange, value, onBlur, name, ref },
                    }) => {
                      const handleChange: (event: any) => void = (event) => {
                        onChange(event) // react-hook-formのonChangeハンドラにイベントを渡す
                      }
                      return (
                        <Select
                          labelId="select-label"
                          id="select"
                          label="Select"
                          inputRef={ref}
                          onChange={handleChange} // 修正されたハンドラを使用
                          value={value}
                          onBlur={onBlur}
                        >
                          <MenuItem value={0}>未選択</MenuItem>
                          {locates &&
                            locates.map((locate) => (
                              <MenuItem
                                value={locate.locate_id}
                                key={locate.locate_id}
                              >
                                {locate.name}
                              </MenuItem>
                            ))}
                        </Select>
                      )
                    }}
                  />
                  <Button type="submit">登録</Button>
                </FormControl>
              )}
            />
          )}
        />
      </Box>
    </>
  )
}
