import { z } from "zod";

export const userInfoDetails = z.object({
    firstName: z.string().min(1, "First name is reqiured"),
    lastName: z.string().min(1, "lastname is reqiured"),
    phoneNumber: z.number().max(10, "Number must be 10 digits"),
    gender: z.enum(["Male", "female"]),
    dob: z.date()
});

export const professionalSummary = z.object({
    position: z.string().min(1, "It must not be empty"),
    experience: z.enum(["1-2", "3-5", "6-9", "10+"]),
    description: z.string(),
});

export const privacyInformationCheck = z.object({
    registeraionCheck: z.boolean()
});

export type userInfoDetailsType = z.infer<typeof userInfoDetails>;
export type professionalSummaryType = z.infer<typeof professionalSummary>;
export type privacyInformationCheckType = z.infer<typeof privacyInformationCheck>;

export type stepFormInformation = userInfoDetailsType | professionalSummaryType | privacyInformationCheckType;