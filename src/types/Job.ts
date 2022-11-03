export interface Job {
		id: string;
		name: string;
		email: string;
		phone: string;
		title: string;
		salary: string;
		address: string;
		benefits: string[];
		location: object;
		pictures: string[];
		createdAt: Date;
		updatedAt: Date;
		description: string;
		employment_type: string[];
}