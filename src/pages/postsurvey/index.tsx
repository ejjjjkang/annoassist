import { SyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import {
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	Button,
	Box,
	TextField,
	Typography,
	Container,
	InputLabel,
	Input,
} from "@mui/material";

interface FormContent {
	"radio-group-1": string;
	"radio-group-2": string;
	"radio-group-3": string;
	"text-answer": TextContent;
}
interface TextContent {
	age: string;
	q1: string;
	q2: string;
	q3: string;
}

const PostSurvey = () => {
	const [data, setData] = useState<FormContent>();
	const [textValues, setTextValues] = useState<TextContent>({
		age: "",
		q1: "",
		q2: "",
		q3: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setTextValues({
			...textValues,
			[name]: value,
		});
	};

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			"radio-group-1": { value: string };
			"radio-group-2": { value: string };
			"radio-group-3": { value: string };
		};

		setData({
			"radio-group-1": target["radio-group-1"].value,
			"radio-group-2": target["radio-group-2"].value,
			"radio-group-3": target["radio-group-3"].value,
			"text-answer": textValues,
		});
	};

	useEffect(() => {
		//fetch data
		console.log(textValues);
		console.log(data);
	}, [data]);

	return (
		<Container>
			<Typography align="center" variant="h5" sx={{ m: 5 }}>
				Thank you for completing the tasks. <br />
				Please answer the following questions to help us understand your
				experience of the annotation work.
			</Typography>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{ display: "flex", flexDirection: "column" }}
			>
				<FormControl required sx={{ padding: 3 }}>
					<InputLabel required>What is your age?</InputLabel>
					<Input
						type="text"
						value={textValues?.age}
						name="age"
						onChange={handleChange}
					></Input>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>What is your gender?</FormLabel>
					<RadioGroup name="radio-group-1">
						<FormControlLabel
							label="Female"
							control={<Radio />}
							value="Female"
						/>
						<FormControlLabel label="Male" control={<Radio />} value="Male" />
						<FormControlLabel
							label="Other (specify)"
							control={<Radio />}
							value="Other (specify)"
						/>
						<FormControlLabel
							label="Prefer not to say"
							control={<Radio />}
							value="Prefer not to say"
						/>
					</RadioGroup>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						What is the highest level of school you have completed or the
						highest degree you have received?
					</FormLabel>
					<RadioGroup name="radio-group-1">
						<FormControlLabel
							label="Less than high school degree"
							control={<Radio />}
							value="radio-group-1-1"
						/>
						<FormControlLabel
							label="High school degree or equivalent (e.g., GED)"
							control={<Radio />}
							value="radio-group-1-2"
						/>

						<FormControlLabel
							label="Some college but no degree"
							control={<Radio />}
							value="radio-group-1-3"
						/>
						<FormControlLabel
							label="Associate degree"
							control={<Radio />}
							value="radio-group-1-4"
						/>
						<FormControlLabel
							label="Bachelor degree"
							control={<Radio />}
							value="radio-group-1-5"
						/>
						<FormControlLabel
							label="Graduate degree"
							control={<Radio />}
							value="radio-group-1-6"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						How much do you rate yourself that you have enough knowledge to
						explain medical events?
					</FormLabel>
					<RadioGroup name="radio-group-2">
						<FormControlLabel
							label="radio-group-2-1"
							control={<Radio />}
							value="radio-group-2-1"
						/>
						<FormControlLabel
							label="radio-group-2-2"
							control={<Radio />}
							value="radio-group-2-2"
						/>
						<FormControlLabel
							label="radio-group-2-3"
							control={<Radio />}
							value="radio-group-2-3"
						/>
						<FormControlLabel
							label="radio-group-2-4"
							control={<Radio />}
							value="radio-group-2-4"
						/>
						<FormControlLabel
							label="radio-group-2-5"
							control={<Radio />}
							value="radio-group-2-5"
						/>
						<FormControlLabel
							label="radio-group-2-6"
							control={<Radio />}
							value="radio-group-2-6"
						/>
						<FormControlLabel
							label="radio-group-2-7"
							control={<Radio />}
							value="radio-group-2-7"
						/>
					</RadioGroup>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<FormLabel>
						How would you rate your knowledge in identifying 7 classes
					</FormLabel>
					<RadioGroup name="radio-group-3">
						<FormControlLabel
							label="radio-group-3-1"
							control={<Radio />}
							value="radio-group-3-1"
						/>
						<FormControlLabel
							label="radio-group-3-2"
							control={<Radio />}
							value="radio-group-3-2"
						/>
						<FormControlLabel
							label="radio-group-3-3"
							control={<Radio />}
							value="radio-group-3-3"
						/>
						<FormControlLabel
							label="radio-group-3-4"
							control={<Radio />}
							value="radio-group-3-4"
						/>
						<FormControlLabel
							label="radio-group-3-5"
							control={<Radio />}
							value="radio-group-3-5"
						/>
						<FormControlLabel
							label="radio-group-3-6"
							control={<Radio />}
							value="radio-group-3-6"
						/>
						<FormControlLabel
							label="radio-group-3-7"
							control={<Radio />}
							value="radio-group-3-7"
						/>
					</RadioGroup>
				</FormControl>

				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						Can you explain general strategies that you made to efficiently and
						correctly annotate data throughout tasks?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q1"
						value={textValues?.q1}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						Can you elaborate on how you adapted suggestions to generate
						accurate annotations? <br />
						Do you think that generating annotations was affected by the
						accuracy of suggestions?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						multiline
						rows={4}
						type="text"
						name="q2"
						value={textValues?.q2}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl required sx={{ padding: 3 }}>
					<Typography variant="h6">
						What additional information or interaction features that support
						'system' you wish to know or that would have helped you make better
						decisions in tasks?
					</Typography>
					<TextField
						required
						fullWidth
						margin="normal"
						multiline
						rows={4}
						type="text"
						name="q3"
						value={textValues?.q3}
						onChange={handleChange}
					/>
				</FormControl>
				<Button type="submit" variant="outlined" value="Submit">
					Submit
				</Button>
			</Box>
		</Container>
	);
};

export default PostSurvey;
